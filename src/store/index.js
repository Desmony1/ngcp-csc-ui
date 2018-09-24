'use strict';

import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import CallBlockingModule from './call-blocking'
import CallForwardModule from './call-forward'
import CallModule from './call'
import ConversationsModule from './conversations'
import LayoutModule from './layout'
import PbxConfigModule from './pbx-config/index'
import ReminderModule from './reminder'
import SpeedDialModule from './speed-dial'
import UserModule from './user'
import CommunicationModule from './communication'
import VoiceboxModule from './voicebox'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        callBlocking: CallBlockingModule,
        callForward: CallForwardModule,
        call: CallModule,
        conversations: ConversationsModule,
        layout: LayoutModule,
        pbxConfig: PbxConfigModule,
        reminder: ReminderModule,
        speedDial: SpeedDialModule,
        user: UserModule,
        communication: CommunicationModule,
        voicebox: VoiceboxModule
    },
    getters: {
        pageTitle(state) {
            return _.get(state, 'route.meta.title', 'Not defined');
        },
        pageSubtitle(state) {
            return _.get(state, 'route.meta.subtitle', '');
        }
    }
});
