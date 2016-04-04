"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GitaxianProbeBase = require("../setpFNM/GitaxianProbe.js");

class GitaxianProbe extends GitaxianProbeBase {
  constructor(game) {
    super(game, "Gitaxian Probe", "New Phyrexia", "NPH");
  }
}

module.exports = GitaxianProbe;
