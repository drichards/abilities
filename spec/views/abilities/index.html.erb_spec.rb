require 'spec_helper'

describe "abilities/index" do
  before(:each) do
    assign(:abilities, [
      stub_model(Ability,
        :name => "Name",
        :type => "Type",
        :description => "Description",
        :body => "Body"
      ),
      stub_model(Ability,
        :name => "Name",
        :type => "Type",
        :description => "Description",
        :body => "Body"
      )
    ])
  end

  it "renders a list of abilities" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Type".to_s, :count => 2
    assert_select "tr>td", :text => "Description".to_s, :count => 2
    assert_select "tr>td", :text => "Body".to_s, :count => 2
  end
end
