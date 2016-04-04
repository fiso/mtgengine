"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BriarknitKami extends Card {
  constructor(game) {
    super(game, "Briarknit Kami", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = BriarknitKami;
