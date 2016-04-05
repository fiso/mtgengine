"use strict";
const Constants = require ("../../../Constants");
const GitaxianProbeBase = require("../setpFNM/GitaxianProbe");

class GitaxianProbe extends GitaxianProbeBase {
  constructor(game) {
    super(game, "Gitaxian Probe", "New Phyrexia", "NPH");
  }
}

module.exports = GitaxianProbe;
