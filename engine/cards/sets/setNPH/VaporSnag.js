"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VaporSnagBase = require("../setDDH/VaporSnag.js");

class VaporSnag extends VaporSnagBase {
  constructor(game) {
    super(game, "Vapor Snag", "New Phyrexia", "NPH");
  }
}

module.exports = VaporSnag;
