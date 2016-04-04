"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const XiahouDuntheOneEyedBase = require("../setpJGP/XiahouDuntheOneEyed.js");

class XiahouDuntheOneEyed extends XiahouDuntheOneEyedBase {
  constructor(game) {
    super(game, "Xiahou Dun, the One-Eyed", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = XiahouDuntheOneEyed;
