"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PersonalIncarnationBase = require("../setCED/PersonalIncarnation.js");

class PersonalIncarnation extends PersonalIncarnationBase {
  constructor(game) {
    super(game, "Personal Incarnation", "Masters Edition IV", "ME4");
  }
}

module.exports = PersonalIncarnation;
