"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IndestructibilityBase = require("../setM10/Indestructibility.js");

class Indestructibility extends IndestructibilityBase {
  constructor(game) {
    super(game, "Indestructibility", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Indestructibility;
