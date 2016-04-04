"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MeadowboonBase = require("../setMMA/Meadowboon.js");

class Meadowboon extends MeadowboonBase {
  constructor(game) {
    super(game, "Meadowboon", "Morningtide", "MOR");
  }
}

module.exports = Meadowboon;
