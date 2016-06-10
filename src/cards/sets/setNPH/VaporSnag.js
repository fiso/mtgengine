"use strict";
const Constants = require ("../../../Constants");
const VaporSnagBase = require("../setDDH/VaporSnag");

class VaporSnag extends VaporSnagBase {
  constructor (game) {
    super(game, "Vapor Snag", "New Phyrexia", "NPH");
  }
}

module.exports = VaporSnag;
