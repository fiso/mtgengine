"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoanoftheUnhallowedBase = require("../setDDQ/MoanoftheUnhallowed.js");

class MoanoftheUnhallowed extends MoanoftheUnhallowedBase {
  constructor(game) {
    super(game, "Moan of the Unhallowed", "Innistrad", "ISD");
  }
}

module.exports = MoanoftheUnhallowed;
