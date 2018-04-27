class NumberGeneratorController < ApplicationController

  def number
    render json: { value: 42001 }
  end
end
