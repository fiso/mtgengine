"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnquestionedAuthorityBase = require("../setJUD/UnquestionedAuthority.js");

class UnquestionedAuthority extends UnquestionedAuthorityBase {
  constructor(game) {
    super(game, "Unquestioned Authority", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = UnquestionedAuthority;
