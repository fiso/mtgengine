"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InstigatorGang extends Card {
  constructor(game) {
    super(game, "Instigator Gang", "Innistrad", "ISD");
  }
}

module.exports = InstigatorGang;
