"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlayeroftheWickedBase = require("../setDDQ/SlayeroftheWicked.js");

class SlayeroftheWicked extends SlayeroftheWickedBase {
  constructor(game) {
    super(game, "Slayer of the Wicked", "Innistrad", "ISD");
  }
}

module.exports = SlayeroftheWicked;
