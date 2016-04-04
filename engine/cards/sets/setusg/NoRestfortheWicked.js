"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NoRestfortheWickedBase = require("../set10E/NoRestfortheWicked.js");

class NoRestfortheWicked extends NoRestfortheWickedBase {
  constructor(game) {
    super(game, "No Rest for the Wicked", "Urza's Saga", "USG");
  }
}

module.exports = NoRestfortheWicked;
