"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlackmailBase = require("../set9ED/Blackmail.js");

class Blackmail extends BlackmailBase {
  constructor(game) {
    super(game, "Blackmail", "Onslaught", "ONS");
  }
}

module.exports = Blackmail;
