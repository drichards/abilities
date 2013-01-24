require 'spec_helper'

describe "abilities/show" do
  before(:each) do
    @ability = assign(:ability, stub_model(Ability,
      :name => "Name",
      :type => "Type",
      :description => "Description",
      :body => "Body"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Name/)
    rendered.should match(/Type/)
    rendered.should match(/Description/)
    rendered.should match(/Body/)
  end
end
