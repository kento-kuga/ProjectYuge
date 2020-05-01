Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
        get 'steam_user/show'
        get 'steam_user/player_summarie'
    end
  end
end
