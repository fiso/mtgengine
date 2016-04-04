"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoltingSkin extends UnimplementedCard {
  constructor(game) {
    super(game, "Molting Skin", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MoltingSkin;
