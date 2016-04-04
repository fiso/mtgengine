"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hinder extends Card {
  constructor(game) {
    super(game, "Hinder", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Hinder;
