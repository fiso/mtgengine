"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OublietteBase = require("../setARN/Oubliette.js");

class Oubliette extends OublietteBase {
  constructor(game) {
    super(game, "Oubliette", "Masters Edition", "MED");
  }
}

module.exports = Oubliette;
