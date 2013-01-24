require 'spec_helper'

describe "abilities/new" do
  before(:each) do
    assign(:ability, stub_model(Ability,
      :name => "MyString",
      :type => "",
      :description => "MyString",
      :body => "MyString"
    ).as_new_record)
  end

  it "renders new ability form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => abilities_path, :method => "post" do
      assert_select "input#ability_name", :name => "ability[name]"
      assert_select "input#ability_type", :name => "ability[type]"
      assert_select "input#ability_description", :name => "ability[description]"
      assert_select "input#ability_body", :name => "ability[body]"
    end
  end
end
