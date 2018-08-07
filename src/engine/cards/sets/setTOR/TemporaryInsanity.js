"use strict";
const Constants = require ("../../../Constants");
const TemporaryInsanityBase = require("../setDDG/TemporaryInsanity");

class TemporaryInsanity extends TemporaryInsanityBase {
  constructor (game) {
    super(game, "Temporary Insanity", "Torment", "TOR");
  }
}

module.exports = TemporaryInsanity;
