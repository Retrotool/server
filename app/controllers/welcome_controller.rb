class WelcomeController < ApplicationController
  def index
    ActionCable.server.broadcast 'messages',
                                 message: 'One more joined us',
                                 user: 'OMG! He is Anon Mouse!
'
  end
end
