"use strict";
const Constants = require ("../../../Constants");
const SlayeroftheWickedBase = require("../setDDQ/SlayeroftheWicked");

class SlayeroftheWicked extends SlayeroftheWickedBase {
  constructor(game) {
    super(game, "Slayer of the Wicked", "Innistrad", "ISD");
  }
}

module.exports = SlayeroftheWicked;
