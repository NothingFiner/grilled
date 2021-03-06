class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :user_id, null: false, index: true
      t.integer :conversation_id, null: false, index: true

      t.timestamps
    end
  end
end
