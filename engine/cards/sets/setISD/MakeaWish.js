"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MakeaWish extends Card {
  constructor(game) {
    super(game, "Make a Wish", "Innistrad", "ISD");
  }
}

module.exports = MakeaWish;
