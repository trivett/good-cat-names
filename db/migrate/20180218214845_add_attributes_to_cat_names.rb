class AddAttributesToCatNames < ActiveRecord::Migration[5.1]
  def change
    add_reference :cat_names, :user, foreign_key: true
    add_column :cat_names, :name, :string
    add_column :cat_names, :score, :integer, default: 0
  end
end
