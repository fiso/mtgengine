"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeploytotheFront extends UnimplementedCard {
  constructor (game) {
    super(game, "Deploy to the Front", "Commander 2014", "C14");
  }
}

module.exports = DeploytotheFront;
