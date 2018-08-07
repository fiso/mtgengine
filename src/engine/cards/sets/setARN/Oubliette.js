"use strict";
const Constants = require ("../../../Constants");
const OublietteBase = require("../setMED/Oubliette");

class Oubliette extends OublietteBase {
  constructor (game) {
    super(game, "Oubliette", "Arabian Nights", "ARN");
  }
}

module.exports = Oubliette;
