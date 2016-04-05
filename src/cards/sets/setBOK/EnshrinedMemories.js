"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnshrinedMemories extends UnimplementedCard {
  constructor(game) {
    super(game, "Enshrined Memories", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = EnshrinedMemories;
