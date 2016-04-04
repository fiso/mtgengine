"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PersonalIncarnation extends Card {
  constructor(game) {
    super(game, "Personal Incarnation", "Collector's Edition", "CED");
  }
}

module.exports = PersonalIncarnation;
