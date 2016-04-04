"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const XathridGorgonBase = require("../setM13/XathridGorgon.js");

class XathridGorgon extends XathridGorgonBase {
  constructor(game) {
    super(game, "Xathrid Gorgon", "Prerelease Events", "pPRE");
  }
}

module.exports = XathridGorgon;
