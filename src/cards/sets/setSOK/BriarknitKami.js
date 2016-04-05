"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BriarknitKami extends UnimplementedCard {
  constructor(game) {
    super(game, "Briarknit Kami", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = BriarknitKami;
