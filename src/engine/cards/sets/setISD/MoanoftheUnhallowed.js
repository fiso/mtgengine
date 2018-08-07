"use strict";
const Constants = require ("../../../Constants");
const MoanoftheUnhallowedBase = require("../setDDQ/MoanoftheUnhallowed");

class MoanoftheUnhallowed extends MoanoftheUnhallowedBase {
  constructor (game) {
    super(game, "Moan of the Unhallowed", "Innistrad", "ISD");
  }
}

module.exports = MoanoftheUnhallowed;
