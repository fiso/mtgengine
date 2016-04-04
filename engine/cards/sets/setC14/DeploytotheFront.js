"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeploytotheFront extends Card {
  constructor(game) {
    super(game, "Deploy to the Front", "Commander 2014", "C14");
  }
}

module.exports = DeploytotheFront;
