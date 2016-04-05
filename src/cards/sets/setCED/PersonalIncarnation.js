"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PersonalIncarnation extends UnimplementedCard {
  constructor(game) {
    super(game, "Personal Incarnation", "Collector's Edition", "CED");
  }
}

module.exports = PersonalIncarnation;
