require 'net/http'

module Api
  module V1
    class SteamUserController < ApplicationController
      def show
        render json: {message: 'hello'}
      end

      def player_summarie

        steamids = "76561198121065152"

        data={
          "key":"431EA366803ABC4A3E052A5AF989434B",
          "steamids": steamids
        }

        params = data.to_query

        uri = URI.parse("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?" + params)

        @query = uri.query

        response = Net::HTTP.start(uri.host, uri.port) do |http|
          http.open_timeout = 5
          http.read_timeout = 10
          http.get(uri.request_uri)
        end

        begin
          case response
          when Net::HTTPSuccess
            render json: {result: JSON.parse(response.body)}
          when Net::HTTPRedirection
            render json: {message: "Redirection: code=#{response.code} message=#{response.message}"}
          else
            render json: {params: params, uri: uri, query: @query, host:uri.host, port:uri.port ,message: "HTTP ERROR: code=#{response.code} message=#{response.message}"}
          end
        rescue IOError => e
          render json: {message: e.message}
        rescue TimeoutError => e
          render json: {message: e.message}
        rescue JSON::ParserError => e
          render json: {message: e.message}
        rescue => e
          render json: {message: e.message}
        end
      end
    end
  end
end
