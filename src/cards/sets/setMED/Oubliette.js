"use strict";
const Constants = require ("../../../Constants");
const OublietteBase = require("../setARN/Oubliette");

class Oubliette extends OublietteBase {
  constructor (game) {
    super(game, "Oubliette", "Masters Edition", "MED");
  }
}

module.exports = Oubliette;
