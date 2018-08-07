"use strict";
const Constants = require ("../../../Constants");
const UnquestionedAuthorityBase = require("../setC18/UnquestionedAuthority");

class UnquestionedAuthority extends UnquestionedAuthorityBase {
  constructor (game) {
    super(game, "Unquestioned Authority", "Judgment", "JUD");
  }
}

module.exports = UnquestionedAuthority;
