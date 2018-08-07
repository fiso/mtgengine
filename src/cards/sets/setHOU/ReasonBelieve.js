"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReasonBelieve extends UnimplementedCard {
  constructor (game) {
    super(game, "Reason // Believe", "Hour of Devastation", "HOU");
  }
}

module.exports = ReasonBelieve;
