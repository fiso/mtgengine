"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TemporaryInsanityBase = require("../setDDG/TemporaryInsanity.js");

class TemporaryInsanity extends TemporaryInsanityBase {
  constructor(game) {
    super(game, "Temporary Insanity", "Torment", "TOR");
  }
}

module.exports = TemporaryInsanity;
