"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Feedback extends UnimplementedCard {
  constructor (game) {
    super(game, "Feedback", "Fifth Edition", "5ED");
  }
}

module.exports = Feedback;
