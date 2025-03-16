--
-- PostgreSQL database dump
--

-- Dumped from database version 16.6 (Ubuntu 16.6-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.6 (Ubuntu 16.6-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: board; Type: TABLE; Schema: public; Owner: jonorl
--

CREATE TABLE public.board (
    id integer NOT NULL,
    username character varying(255),
    text character varying(255),
    date timestamp without time zone DEFAULT now()
);


ALTER TABLE public.board OWNER TO jonorl;

--
-- Name: usernames_id_seq; Type: SEQUENCE; Schema: public; Owner: jonorl
--

ALTER TABLE public.board ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.usernames_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: board; Type: TABLE DATA; Schema: public; Owner: jonorl
--

COPY public.board (id, username, text, date) FROM stdin;
3	Armando	Hi there!	2025-03-14 22:15:54.413239
4	Charles	Hello World!	2025-03-14 22:15:59.783695
5	Jon	Holaaaa	2025-03-16 17:42:15.032436
\.


--
-- Name: usernames_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jonorl
--

SELECT pg_catalog.setval('public.usernames_id_seq', 5, true);


--
-- Name: board usernames_pkey; Type: CONSTRAINT; Schema: public; Owner: jonorl
--

ALTER TABLE ONLY public.board
    ADD CONSTRAINT usernames_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

