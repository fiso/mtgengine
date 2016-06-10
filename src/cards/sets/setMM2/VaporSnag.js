"use strict";
const Constants = require ("../../../Constants");
const VaporSnagBase = require("../setDDH/VaporSnag");

class VaporSnag extends VaporSnagBase {
  constructor (game) {
    super(game, "Vapor Snag", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = VaporSnag;
