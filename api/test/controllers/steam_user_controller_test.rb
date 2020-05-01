require 'test_helper'

class SteamUserControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get steam_user_show_url
    assert_response :success
  end

end
