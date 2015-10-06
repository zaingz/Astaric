class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :tittle
      t.string :catagory

      t.timestamps null: false
    end
  end
end
