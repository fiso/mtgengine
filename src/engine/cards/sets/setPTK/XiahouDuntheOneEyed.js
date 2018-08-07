"use strict";
const Constants = require ("../../../Constants");
const XiahouDuntheOneEyedBase = require("../setJ12/XiahouDuntheOneEyed");

class XiahouDuntheOneEyed extends XiahouDuntheOneEyedBase {
  constructor (game) {
    super(game, "Xiahou Dun, the One-Eyed", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = XiahouDuntheOneEyed;
