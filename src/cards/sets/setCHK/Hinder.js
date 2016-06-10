"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Hinder", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Hinder;
