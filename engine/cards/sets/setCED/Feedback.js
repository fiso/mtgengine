"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Feedback extends UnimplementedCard {
  constructor(game) {
    super(game, "Feedback", "Collector's Edition", "CED");
  }
}

module.exports = Feedback;
