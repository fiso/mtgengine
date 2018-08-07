"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PersonalIncarnation extends UnimplementedCard {
  constructor (game) {
    super(game, "Personal Incarnation", "Masters Edition IV", "ME4");
  }
}

module.exports = PersonalIncarnation;
