"use strict";
const Constants = require ("../../../Constants");
const BlackmailBase = require("../set9ED/Blackmail");

class Blackmail extends BlackmailBase {
  constructor (game) {
    super(game, "Blackmail", "Onslaught", "ONS");
  }
}

module.exports = Blackmail;
