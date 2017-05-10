import * as ApiConversationUtil from '../util/conversation_api';
import receiveErrors from './errors';

export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
export const RECEIVE_OFFER = 'RECEIVE_OFFER';
export const SWITCH_BOX = 'SWITCH_BOX';
export const TOGGLE_CONVERSATION = 'TOGGLE_CONVERSATION';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const TOGGLE_MESSAGE_MODAL = 'TOGGLE_MESSAGE_MODAL';

const receiveConversations = conversations => ({
  type: RECEIVE_CONVERSATIONS,
  conversations,
});

const receiveConversation = conversation => ({
  type: RECEIVE_CONVERSATION,
  conversation,
});

const receiveOffer = offer => ({
  type: RECEIVE_OFFER,
  offer,
});

export const switchBox = box => ({
  type: SWITCH_BOX,
  box,
});

export const toggleConversation = id => ({
  type: TOGGLE_CONVERSATION,
  id,
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message,
});

export const toggleMessageModal = () => ({
  type: TOGGLE_MESSAGE_MODAL,
});

export const fetchConversations = () => dispatch => (
  ApiConversationUtil.fetchConversations()
    .then(data => dispatch(receiveConversations(data)))
);

export const fetchConversation = id => dispatch => (
  ApiConversationUtil.fetchConversation(id)
    .then(data => dispatch(receiveConversation(data)))
);

export const createMessage = message => dispatch => (
  ApiConversationUtil.createMessage(message)
    .then(
      data => dispatch(receiveMessage(data)),
      err => dispatch(receiveErrors(err)),
    )
);
