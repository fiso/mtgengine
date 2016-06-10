"use strict";
const Constants = require ("../../../Constants");
const XenicPoltergeistBase = require("../setATQ/XenicPoltergeist");

class XenicPoltergeist extends XenicPoltergeistBase {
  constructor (game) {
    super(game, "Xenic Poltergeist", "Fifth Edition", "5ED");
  }
}

module.exports = XenicPoltergeist;
