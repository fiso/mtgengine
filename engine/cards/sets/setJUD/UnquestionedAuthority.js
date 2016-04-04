"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnquestionedAuthority extends Card {
  constructor(game) {
    super(game, "Unquestioned Authority", "Judgment", "JUD");
  }
}

module.exports = UnquestionedAuthority;
